export type DepartmentObject = {
    id: number;
    title: string;
    slug: string;
    description: string;
    updated: string;
  };
  
  export type CourseObject = {
      courseId: string
      id: number
      level: string
      semester: string
      title: string
      units: number
      url: string
  
  }
  
  
  export type Slug = {
      slug: string
  }