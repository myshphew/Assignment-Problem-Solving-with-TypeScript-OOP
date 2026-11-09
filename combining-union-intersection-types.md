# Combining Union (`|`) and Intersection (`&`) Types in TypeScript

## Introduction

TypeScript has Union (`|`) and Intersection (`&`) types to create complex and reusable types. They are similar to the union and intersection operations in set theory. Union types allow a variable to accept values from two or more different types, while intersection types combine multiple types into one. They are useful when we need to build complex types from different type collections, just like building blocks.

## Practical Example: University Management System

Consider a university management system where students and faculty members share common information but have different properties.

**1. Define the types:**

```typescript
type UniversityMember = {
  id: number;
  name: string;
};

type Student = {
  role: "student";
  courses: string[];
};

type Faculty = {
  role: "faculty";
  department: string;
};
```

**2. Combine them using Intersection (`&`):**

```typescript
type UniversityStudent = UniversityMember & Student;
type UniversityFaculty = UniversityMember & Faculty;
```

**3. Combine them using Union (`|`):**

```typescript
type UniversityUser = UniversityStudent | UniversityFaculty;
```

**4. Example usage:**

```typescript
const user: UniversityUser = {
  id: 101,
  name: "Alex",
  role: "student",
  courses: ["CSE110", "CSE111"],
};
```

**Explanation:**

- **Intersection (`&`)** combines common properties with specific properties.
- **Union (`|`)** allows `UniversityUser` to represent either a student or a faculty member.

Thus, combining union and intersection types helps create flexible and reusable type definitions in TypeScript.

## Conclusion

Combining union and intersection types makes TypeScript applications more flexible and maintainable. This approach is especially useful for modeling complex data structures, user roles, and reusable component properties.
