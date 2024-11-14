import type { Attributes } from "../types";

/**
 * Checks if the provided attributes meet the requirments of a class' attributes given by `requiredAttributes`.
 * @param attributes The attributes to check.
 * @param requiredAttributes The requirement for each attribute as an object.
 * @returns `true` if all attributes are greater than or eqaul to the required attributes. Otherwise returns `false`
 */
export default function meetsClassRequirements(attributes: Attributes, requiredAttributes: Attributes): boolean {
  for (const [name, value] of Object.entries(attributes)) {
    if (value < requiredAttributes[name]) {
      return false;
    }
  }

  return true;
}