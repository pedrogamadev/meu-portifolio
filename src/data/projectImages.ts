const modules = import.meta.glob(
  '/src/assets/projetos/**/*.{png,jpg,jpeg,webp}',
  { eager: true }
) as Record<string, { default: string }>

export function getProjectImages(projectId: string): string[] {
  const prefix = `/src/assets/projetos/${projectId}/`
  return Object.entries(modules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => {
      const numA = parseInt(a.split('/').pop()?.split('.')[0] ?? '0', 10)
      const numB = parseInt(b.split('/').pop()?.split('.')[0] ?? '0', 10)
      return numA - numB
    })
    .map(([, mod]) => mod.default)
}
