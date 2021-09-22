{
  function something<Type>(arg: Type): Type {
    return arg;
  }

  ("Write a quick type system to describe a hierarchy of geographical areas, e.g., countries, states, provinces, cities, towns, villages, within a single type hierarchy.");

  interface LocationCoors {
    x: number;
    y: number;
  }

  interface LocationId {
    coords: LocationCoors;
    name: string;
  }

  type State = string;
  type Province = string;
  type City = LocationId;

  interface Country {
    states: State[];
    provinces: Province[];
    cities: City[];
  }

  type Area = Country[];

  const instructions =
    "given a string like '123', write an algorithm that goes over a hashmap of substrings, and show all the possible permutations. So, for example, '123' would produce ['ADP', 'BDP', 'XP', 'M'], amongst other results";

  const conversions = {
    "1": ["A", "B", "C"],
    "2": ["D", "E"],
    "12": ["X"],
    "3": ["P", "Q"],
    "123": ["M", "N"],
  };

  const getSubString = (currentStrChar: string, value: string[]) => {
    console.log({ currentStrChar, value });
    // this should be recursive function eventuall, to loop through
  };

  const createConversions = (str: string): string[] => {
    // currently only solves for single characters
    let separateChars = str.split("");
    const subStrings: string[] = [];
    for (let i = 0; i < separateChars.length; i++) {
      const currentStrChar = separateChars[i].toUpperCase();

      for (const [key, value] of Object.entries(conversions)) {
        if (currentStrChar === key) {
          getSubString(currentStrChar, value);
        }
      }
    }

    return subStrings;
  };
}
