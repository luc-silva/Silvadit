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

export default function ForumEditPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-base-content">
      <Typography variant="h4" className="font-semibold">
        Editar Fórum
      </Typography>

      {/* Informações Básicas */}
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="space-y-4">
          <TextField
            label="Nome do Fórum"
            defaultValue="Nome atual do fórum"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{ className: 'bg-base-100' }}
          />
          <TextField
            label="Descrição"
            defaultValue="Descrição atual do fórum"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={3}
            InputProps={{ className: 'bg-base-100' }}
          />
        </CardContent>
      </Card>

      {/* Configurações */}
      <Card className="bg-base-200 border border-base-300">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
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
          <UploadBlock label="Alterar Foto do Fórum (opcional)" />
          <UploadBlock label="Alterar Banner do Fórum (opcional)" />
        </CardContent>
      </Card>

      {/* Botão Salvar */}
      <div className="pt-4">
        <Button variant="contained" color="primary" size="large">
          Salvar Alterações
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
