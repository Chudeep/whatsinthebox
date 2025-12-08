# Whatsinthebox Project Roadmap

## 1. Project Analysis

### Current State
- **Purpose**: A simple web application that suggests a random movie from a hardcoded list.
- **Tech Stack**:
  - **Framework**: Next.js 12 (Outdated)
  - **Library**: React 17 (Outdated)
  - **UI Library**: Material UI v4 (Outdated)
  - **Type Checking**: Flow (Less common in modern React ecosystem compared to TypeScript)
  - **Data Source**: Hardcoded array in `src/utils.js`
- **Functionality**:
  - Click a button to get a random movie recommendation.
  - Link to Letterboxd for details.

### Intentions
- To provide a fun and easy way for users to decide what movie to watch.
- Future plans (from README) included filtering by genre, year, and language.

## 2. Roadmap

### Phase 1: Modernization & Technical Debt (Immediate)
- [ ] **Migrate to TypeScript**: Replace Flow with TypeScript for better type safety and developer experience.
- [ ] **Upgrade Tech Stack**:
  - Upgrade Next.js to v14/v15 (App Router).
  - Upgrade React to v18/v19.
  - Upgrade Material UI to MUI v5/v6 OR switch to a modern styling solution like Tailwind CSS + Shadcn/UI for a more "Apple-like" aesthetic.
- [ ] **Code Quality**:
  - Setup Prettier and ESLint with modern configs.
  - Add unit tests (Jest/Vitest, React Testing Library).

### Phase 2: Feature Implementation (Short-term)
- [ ] **Dynamic Data Source**:
  - Integrate with a movie API (e.g., TMDB, OMDB) to replace the hardcoded list. This unlocks infinite movie possibilities and up-to-date data.
- [ ] **Filtering System**:
  - Implement filters for **Genre**, **Year**, **Language**, and **Rating**.
- [ ] **Search Functionality**:
  - Allow users to search for specific movies to get details or similar recommendations.

### Phase 3: Enhanced UX & Engagement (Medium-term)
- [ ] **UI Overhaul**:
  - Redesign the interface with a focus on visual appeal (glassmorphism, smooth animations, dark mode).
  - Use high-quality movie posters and backdrops.
- [ ] **Movie Details**:
  - Show more info: Plot summary, Cast, Director, Runtime, Rotten Tomatoes/IMDb scores.
  - Embed YouTube trailers directly in the app.
- [ ] **Watchlist**:
  - Allow users to save movies they want to watch (requires local storage or a backend database).

### Phase 4: Social & Advanced Features (Long-term)
- [ ] **User Accounts**:
  - Sign up/Login to save preferences and watchlists across devices.
- [ ] **Social Sharing**:
  - Share recommendations on social media.
- [ ] **"Mood" Based Recommendation**:
  - Suggest movies based on current mood (e.g., "I want to cry", "I want to laugh").

## 3. Recommended Next Steps
1.  **Initialize Git**: Ensure the repo is clean.
2.  **Upgrade Dependencies**: Start the migration to Next.js 14 and TypeScript.
3.  **UI Redesign**: Create a new design system using Tailwind CSS.
