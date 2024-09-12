type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: number | string }>(
  items: T[],
  key: string,
): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }

    result[item[key]].push(item);

    return result;
  }, {});
}
