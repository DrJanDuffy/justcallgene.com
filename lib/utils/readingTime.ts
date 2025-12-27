/**
 * Calculate reading time for content
 * Average reading speed: 200-250 words per minute
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Remove HTML tags and count words
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const minutes = Math.ceil(words.length / wordsPerMinute);
  return Math.max(1, minutes); // Minimum 1 minute
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
}

