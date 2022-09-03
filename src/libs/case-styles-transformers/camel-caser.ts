/**
 * Convert key case styles snake case to camel case.
 * @param key Property key of object.
 * @returns New property key which camel case.
 */
export const convertKey = (key: string) => {
  let newProperty = key;

  if (newProperty.includes('_')) {
    // Split string by underscore.
    const splitted = newProperty.split('_');
    // Update first part of new property.
    newProperty = splitted.at(0);
    // Update the remainder of the new property.
    for (let i = 1; i < splitted.length; i++) {
      const s = splitted[i];
      const first = s.toUpperCase().at(0);
      const remains = s.toLowerCase().substring(1);
      const capitalized = `${first}${remains}`;
      // Combine new property each parts.
      newProperty += capitalized;
    }
  }
  return newProperty;
};

/**
 * Convert every property key of object case styles snake case to camel case.
 * @param object Any object.
 * @returns New object with camel case property key.
 */
export const convertSnakeToCamel = <T>(object: any): T => {
  const results = {};
  const properties = Object.keys(object);
  for (let property of properties) {
    const value = object[property];
    const newProperty = convertKey(property);
    // Primitive type.
    if (typeof value !== 'object') {
      results[newProperty] = value;
      continue;
    }

    // Array type.
    if (Array.isArray(value)) {
      const r = value.map((v) =>
        typeof v === 'object' ? convertSnakeToCamel(v) : v,
      );
      results[newProperty] = r;
      continue;
    }

    // Object type.
    results[newProperty] = value;
  }

  return results as T;
};
