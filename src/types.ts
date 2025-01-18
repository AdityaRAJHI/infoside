export interface Book {
  id: string;
  title: string;
  author: string;
  due_date: string;
  is_returned: boolean;
  user_id: string;
}

export interface UsefulLink {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  user_id: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  user_id: string;
}
