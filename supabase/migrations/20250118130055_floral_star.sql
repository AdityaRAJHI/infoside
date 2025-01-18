/*
  # Initial Schema Setup for Student Dashboard

  1. New Tables
    - `library_books`: Tracks borrowed books and their status
      - `id` (uuid, primary key)
      - `title` (text)
      - `author` (text)
      - `due_date` (timestamptz)
      - `is_returned` (boolean)
      - `user_id` (uuid, foreign key)
    
    - `useful_links`: Stores bookmarked resources
      - `id` (uuid, primary key)
      - `title` (text)
      - `url` (text)
      - `category` (text)
      - `description` (text)
      - `user_id` (uuid, foreign key)
    
    - `notes`: Personal study notes
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `created_at` (timestamptz)
      - `user_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Library Books Table
CREATE TABLE library_books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  author text NOT NULL,
  due_date timestamptz NOT NULL,
  is_returned boolean DEFAULT false,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE library_books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own books"
  ON library_books
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Useful Links Table
CREATE TABLE useful_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL,
  category text NOT NULL,
  description text,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE useful_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own links"
  ON useful_links
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Notes Table
CREATE TABLE notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own notes"
  ON notes
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);
