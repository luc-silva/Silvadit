import { UserTableList } from './request';

export function ForumMembersTab({ isStaff }: { isStaff: boolean }) {
  const members: IUserDetails[] = [
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
    <div className='p-4'>
      <UserTableList users={members} context="members" isStaff={isStaff} />;
    </div>
  );
}
