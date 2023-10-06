import { getJestProjects } from '@nx/jest';

export default {
  projects: getJestProjects(),
  preset: "@shelf/jest-mongodb"
};
