import { describe, expect, it } from 'vitest';
import { validateStaticData } from '../../src/data/validation';
import { notableHoldersByAppointment } from '../../src/data/holders';
import {
    getAppointmentBonus,
    getAppointmentClassName,
    getAppointmentEffect,
} from '../../src/lib/appointments';
import { getEntryRegion } from '../../src/lib/geography';
import { getEntryTrivia } from '../../src/lib/trivia';

const data = validateStaticData();

describe('authored reference data', () => {
    it('passes the shared Zod schemas', () => {
        expect(data.ranks.length).toBeGreaterThan(0);
        expect(data.titles.length).toBeGreaterThan(0);
        expect(data.regions.length).toBeGreaterThan(0);
        expect(data.trivia.length).toBeGreaterThan(0);
    });

    it('contains the complete 365-entry appointment catalogue', () => {
        expect(data.ranks).toHaveLength(295);
        expect(data.titles).toHaveLength(70);
        expect(data.appointments).toHaveLength(365);
    });

    it('keeps the four authored appointment groups intact', () => {
        expect(data.appointments.filter((entry) => entry.category === 'imperial-court')).toHaveLength(227);
        expect(data.appointments.filter((entry) => entry.category === 'provincial-office')).toHaveLength(68);
        expect(data.appointments.filter((entry) => entry.category === 'shogunate-office')).toHaveLength(16);
        expect(data.appointments.filter((entry) => entry.category === 'shugo')).toHaveLength(54);
    });

    it('stores a reading and stable id on every appointment', () => {
        expect(data.appointments.every((entry) => entry.reading.length > 0)).toBe(true);
        expect(new Set(data.appointments.map((entry) => entry.id)).size).toBe(365);
    });

    it('derives class, bonus, and affected stat from normalized appointment facts', () => {
        const kanpaku = data.appointments.find((entry) => entry.japanese === '関白');
        const shugo = data.appointments.find((entry) => entry.japanese === '伊賀守護');

        expect(kanpaku).toBeDefined();
        expect(shugo).toBeDefined();
        if (!kanpaku || !shugo) return;

        expect(getAppointmentClassName(kanpaku)).toBe('Upper 1st Class');
        expect(getAppointmentBonus(kanpaku)).toBe(12);
        expect(getAppointmentEffect(kanpaku)).toBe('Politics + 12');

        expect(getAppointmentClassName(shugo)).toBe('Lower 11th Class');
        expect(getAppointmentBonus(shugo)).toBe(2);
        expect(getAppointmentEffect(shugo)).toBe('Leadership + 2');
    });

    it('resolves every provincial and shugo appointment to geography metadata', () => {
        const regionalAppointments = data.appointments.filter(
            (entry) => entry.category === 'provincial-office' || entry.category === 'shugo',
        );

        expect(regionalAppointments.every((entry) => getEntryRegion(entry))).toBe(true);
    });

    it('keeps notable holder keys attached to real catalogue appointments', () => {
        const appointmentIds = new Set(data.appointments.map((entry) => entry.id));

        expect(
            Object.keys(notableHoldersByAppointment).every((id) => appointmentIds.has(id)),
        ).toBe(true);
    });

    it('attaches institutional trivia to representative court bureaus', () => {
        const expectedTrivia = new Map([
            ['内蔵頭', 'inner-treasury'],
            ['内匠頭', 'court-artisans'],
            ['修理大夫', 'repairs-office'],
            ['兵庫頭', 'arsenal'],
            ['縫殿頭', 'wardrobe'],
            ['大膳大夫', 'imperial-banquet-kitchen'],
            ['大炊頭', 'grain-bureau'],
            ['主殿頭', 'palace-maintenance'],
            ['掃部頭', 'palace-housekeeping'],
            ['東市正', 'capital-markets'],
            ['造酒正', 'sake-office'],
            ['図書頭', 'bureau-of-books'],
            ['大舎人頭', 'imperial-attendants'],
        ]);

        for (const [japanese, triviaId] of expectedTrivia) {
            const entry = data.appointments.find((appointment) => appointment.japanese === japanese);
            expect(entry, japanese).toBeDefined();
            if (!entry) continue;

            expect(getEntryTrivia(entry).map((item) => item.id), japanese).toContain(triviaId);
        }
    });

});
