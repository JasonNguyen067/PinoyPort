-- =============================================
-- PinoyPort Database Schema
-- Uses Supabase Auth (auth.users) for authentication
-- Run this in the Supabase SQL Editor
-- =============================================

-- Profiles table (one-to-one with auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  user_id      UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name VARCHAR(255),
  avatar_url   VARCHAR(255),
  bio          VARCHAR(255)
);

-- Restaurants table
CREATE TABLE IF NOT EXISTS restaurants (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(255),
  address  VARCHAR(255),
  category VARCHAR(255)
);

-- Posts table (photo posts from restaurant visits)
CREATE TABLE IF NOT EXISTS posts (
  id            SERIAL PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_id INT  NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  caption       VARCHAR(255),
  media         TEXT,
  created_at    TIMESTAMP DEFAULT NOW()
);

-- User restaurant stamps (passport stamps)
-- Composite PK ensures one stamp per user per restaurant
CREATE TABLE IF NOT EXISTS user_restaurant_stamps (
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  restaurant_id INT  NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  earned_at     TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, restaurant_id)
);

-- =============================================
-- Auto-create a profile when a user signs up
-- =============================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
