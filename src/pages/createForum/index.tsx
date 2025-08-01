import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Card,
  CardContent,
  InputLabel,
} from '@mui/material';
import { UploadSimple } from '@phosphor-icons/react';

export default function ForumCreatePage() {
  return (
    <div className="px-4 py-8 space-y-6 text-base-content">
      <Typography variant="h4" className="font-semibold">
        Criar Novo Fórum
      </Typography>

      {/* Nome e Descrição */}
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="space-y-4">
          <TextField
            label="Nome do Fórum"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{ className: 'bg-base-100' }}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={3}
            InputProps={{ className: 'bg-base-100' }}
          />
        </CardContent>
      </Card>

      {/* Opções */}
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormControlLabel
            control={<Checkbox />}
            label="Conteúdo sensível (NSFW)"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Visível apenas para seguidores"
          />
        </CardContent>
      </Card>

      {/* Uploads */}
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="space-y-4">
          <UploadBlock label="Foto do Fórum (opcional)" />
          <UploadBlock label="Banner do Fórum (opcional)" />
        </CardContent>
      </Card>

      {/* Botão Criar */}
      <div className="pt-4">
        <Button variant="contained" color="primary" size="large">
          Criar Fórum
        </Button>
      </div>
    </div>
  );
}

function UploadBlock({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <InputLabel className="text-sm text-base-content/80">{label}</InputLabel>
      <label className="flex items-center justify-center w-full h-32 border border-dashed border-base-300 rounded-lg cursor-pointer bg-base-100 hover:bg-base-300/20 transition-colors">
        <div className="flex flex-col items-center gap-1 text-base-content/70">
          <UploadSimple size={24} />
          <span className="text-sm">Clique para enviar arquivo</span>
        </div>
        <input type="file" hidden />
      </label>
    </div>
  );
}
