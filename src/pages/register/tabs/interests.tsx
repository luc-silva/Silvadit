import { Checkbox, FormControlLabel } from '@mui/material';
import { useRegisterContext } from '../context';

export const InterestsTab = () => {
  const { tags, handleTags } = useRegisterContext();
  return (
    <div className="space-y-4">
      <label className="block font-medium mb-2 text-subtitle">
        Tags de Interesse (opcional)
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-text">
        {[
          'Arte',
          'Tecnologia',
          'Filosofia',
          'Ciência',
          'Filmes',
          'Livros',
          'Música',
          'Jogos',
        ].map((tag) => (
          <FormControlLabel
            key={tag}
            control={
              <Checkbox checked={tags.includes(tag)} onChange={handleTags} />
            }
            label={tag}
          />
        ))}
      </div>
    </div>
  );
};
