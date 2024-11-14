/**
 * Calculates the attribute modifier for an attribute
 * @param value The value of the attribute
 * @returns The attribute modifier
 */
export default function calculateAttributeModifier(value: number): number {
  return Math.floor((value - 10) / 2);
}
