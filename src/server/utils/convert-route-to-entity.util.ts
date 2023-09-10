const mapping: Record<string, string> = {
  organizations: 'organization',
  questions: 'question',
  'question-generations': 'question_generation',
  templates: 'template',
  topics: 'topic',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
