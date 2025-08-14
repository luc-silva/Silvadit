import { GridFourIcon, ListIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { FollowCard } from '../FollowCard';
import {
  getUserFollowedForums,
  getUserFollowedUsers,
  getUserFollowers,
} from '~/service/user';
import { useParams } from 'react-router-dom';
import { Loading } from '~/components/Loading';

export const FollowingTab = () => {
  const [viewType, setViewType] = useState<'simple' | 'detailed'>('simple');
  const [followersList, setFollowersList] = useState<any[]>([]);
  const [forumList, setForumList] = useState<any[]>([]);
  const [followedUsers, setFollowedUsers] = useState<any[]>([]);

  const loading = true;
  const error = false;
  const nothingVisible = false;

  const { id } = useParams();

  const userVisibility = {
    showFollowers: true,
    showFollowedUsers: true,
    showFollowedForums: true,
  };

  useEffect(() => {
    if (id) {
      getUserFollowedForums(id).then(({ data }) => setForumList(data));
      getUserFollowedUsers(id).then(({ data }) => setFollowedUsers(data));
      getUserFollowers(id).then(({ data }) => setFollowersList(data));
    }
  }, []);

  return (
    <div className="border-b border-border w-full flex flex-col h-full">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Seguindo</h2>
        <div className="flex gap-2 bg-bg border border-border rounded px-2 py-1">
          <button
            className={`p-1 rounded ${
              viewType === 'simple' ? 'text-primary' : 'text-text'
            }`}
            onClick={() => setViewType('simple')}
          >
            <GridFourIcon size={16} />
          </button>
          <button
            className={`p-1 rounded ${
              viewType === 'detailed' ? 'text-primary' : 'text-text'
            }`}
            onClick={() => setViewType('detailed')}
          >
            <ListIcon size={16} />
          </button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex flex-col items-center justify-center p-10 text-center text-sm text-red-500">
          <div className="text-4xl mb-2">⚠️</div>
          {error}
        </div>
      ) : nothingVisible ? (
        <div className="flex flex-col items-center justify-center text-center text-muted p-10 gap-2">
          <div className="text-5xl">🙈</div>
          <p className="text-lg font-medium">
            Este usuário optou por manter o perfil privado.
          </p>
          <p className="text-sm text-subtitle">
            Nenhuma informação de seguidores ou seguidos está visível.
          </p>
        </div>
      ) : (
        <div className="bg-bg p-4 flex flex-col gap-6 grow">
          {userVisibility.showFollowedForums && (
            <div>
              <h3 className="text-md font-medium mb-2 text-subtitle">Fóruns</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {forumList.map((forum, i) => (
                  <FollowCard
                    key={i}
                    type="forum"
                    variant={viewType}
                    data={forum}
                  />
                ))}
              </div>
            </div>
          )}

          {userVisibility.showFollowedUsers && (
            <div>
              <h3 className="text-md font-medium mb-2 text-subtitle">
                Usuários
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {followedUsers.map((user, i) => (
                  <FollowCard
                    key={i}
                    type="user"
                    variant={viewType}
                    data={user}
                  />
                ))}
              </div>
            </div>
          )}

          {userVisibility.showFollowers && (
            <div>
              <h3 className="text-md font-medium mb-2 text-subtitle">
                Seguidores
              </h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {followersList.map((follower, i) => (
                  <FollowCard
                    key={i}
                    type="user"
                    variant={viewType}
                    data={follower}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
