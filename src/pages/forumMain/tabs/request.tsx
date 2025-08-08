import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { textFieldInputSlot } from '~/components/Input/const';
import {
  menuItemStyles,
  menuListStyles,
  selectInputSlot,
} from '~/components/Select/const';

export const ForumRequestsTab = ({ isStaff }: { isStaff: boolean }) => {
  const requests: IUserDetails[] = [
    {
      firstName: 'Marina Dias',
      username: 'marina_d',
      country: 'BR',
      dateCreated: new Date(),
      email: 'teste.com',
      lastName: 'Silva',
      state: 'SP',
      userId: '3123',
    },
    {
      firstName: 'Lucas Prado',
      username: 'lucasp',
      country: 'BR',
      dateCreated: new Date(),
      email: 'teste.com',
      lastName: 'Silva',
      state: 'SP',
      userId: '3123',
    },
    {
      firstName: 'Bruno Silveira',
      username: 'br_silv',
      country: 'BR',
      dateCreated: new Date(),
      email: 'teste.com',
      lastName: 'Silva',
      state: 'SP',
      userId: '3123',
    },
  ];

  return (
    <div className="p-4">
      <UserTableList users={requests} context="requests" isStaff={isStaff} />
    </div>
  );
};

type IProps = {
  users: IUserDetails[];
  context: 'members' | 'requests';
  isStaff: boolean;
};
export function UserTableList({ users, context, isStaff }: IProps) {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('asc');

  const filtered = users
    .filter(
      (u) =>
        u.firstName.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      order === 'asc'
        ? a.firstName.localeCompare(b.firstName)
        : b.firstName.localeCompare(a.firstName),
    );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <TextField
          label="Buscar por nome"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2"
          slotProps={textFieldInputSlot}
        />
        <FormControl size="small" className="w-full sm:w-48">
          <InputLabel sx={selectInputSlot.inputLabel.sx}>Ordenar</InputLabel>
          <Select
            label="Ordenar"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            sx={selectInputSlot.select.sx}
            MenuProps={{
              PaperProps: {
                sx: menuListStyles.sx,
              },
            }}
          >
            <MenuItem value="asc" sx={menuItemStyles.sx}>
              Nome A-Z
            </MenuItem>
            <MenuItem value="desc" sx={menuItemStyles.sx}>
              Nome Z-A
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="grid grid-cols-12 text-sm font-medium px-2 py-1 text-text border-b border-border">
        <div className="col-span-5">Usuário</div>
        {context === 'members' && (
          <div className="col-span-3 hidden sm:block">Entrou em</div>
        )}
        <div className="col-span-4 text-right">Ações</div>
      </div>

      {filtered.map((user, i) => (
        <div
          key={i}
          className="grid grid-cols-12 items-center px-2 py-2 border-b border-border hover:bg-primary/20 transition rounded"
        >
          <div className="col-span-5 flex items-center gap-3">
            <Avatar sx={{ width: 32, height: 32 }} />
            <div>
              <div className="font-medium text-subtitle">{user.firstName}</div>
              <div className="text-xs text-text">@{user.username}</div>
            </div>
          </div>

          {context === 'members' && (
            <div className="col-span-3 hidden sm:block text-sm text-text">
              {'user.joined'}
            </div>
          )}

          <div className="col-span-4 flex justify-end gap-2 flex-wrap">
            {context === 'members' ? (
              <>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow-sm border border-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition">
                  Seguir
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-bg text-danger-primary text-sm font-medium shadow-sm border border-danger-primary  hover:bg-danger-primary/20 focus:outline-none focus:ring-2 focus:ring-danger-bg focus:ring-offset-2 transition">
                  Reportar
                </button>
                {/* {isStaff && !user.isStaff && (
                  <Button variant="outlined" size="small" color="error">
                    Expulsar
                  </Button>
                )} */}
              </>
            ) : (
              <>
                <Button variant="contained" size="small">
                  Aprovar
                </Button>
                <Button variant="outlined" size="small" color="error">
                  Recusar
                </Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
