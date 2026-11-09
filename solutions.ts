export {};

const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier != undefined) {
    return value * multiplier;
  } else return value * 2;
};

type processInputType = string | number | boolean;

const processInput = (value: processInputType): string | number => {
  if (typeof value == "number") return value * 10;
  if (typeof value == "string") return value.trim().toLowerCase();
  if (value) return "Active";
  else return "Inactive";
};

type formatCoordinateType = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (coordinate: formatCoordinateType): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const concatedArray = [];
  for (const array of arrays) {
    concatedArray.push(...array);
  }
  return concatedArray;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const filteredCourses: Course[] = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return filteredCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K) => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
