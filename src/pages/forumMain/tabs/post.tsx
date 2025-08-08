import { Card, CardContent, Typography } from '@mui/material';

export function PostsTab({
  isPrivate,
  isFollower,
}: {
  isPrivate: boolean;
  isFollower: boolean;
}) {
  if (isPrivate && !isFollower) {
    return (
      <div className="text-subtitle italic p-4 text-center m-8">
        Siga este fórum para visualizar as postagens.
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      {[1, 2].map((_, i) => (
        <Card key={i} className="bg-bg border border-border">
          <CardContent>
            <Typography variant="subtitle1">
              Título da Postagem {i + 1}
            </Typography>
            <Typography variant="body2" className="text-text mt-1">
              Um trecho da postagem que aparece aqui...
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
