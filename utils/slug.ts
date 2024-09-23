export const createSlug = (text: string) => {
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "") // Remove non-word characters
      .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
      .trim() // Trim leading and trailing hyphens
  }

 export const slugToText = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
  }