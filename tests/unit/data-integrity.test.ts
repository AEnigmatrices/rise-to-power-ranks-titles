import { describe, expect, it } from 'vitest';
import { validateStaticData } from '../../src/data/validation';
import {
    getAppointmentBonus,
    getAppointmentClassName,
    getAppointmentEffect,
} from '../../src/lib/appointments';
import { getEntryRegion } from '../../src/lib/geography';

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
});
