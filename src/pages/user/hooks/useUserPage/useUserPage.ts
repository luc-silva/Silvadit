import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPage } from '~/service/user';

export const useUserPage = () => {
  const [profileData, setProfileData] = useState<IUserDetails | null>(null);
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const { id } = useParams();

  const loadUserDetails = async () => {
    if (id) {
      setIsDetailsLoading(true);
      await getUserPage(id)
        .then(({ data }) => {
          setProfileData(data);
        })
        .finally(() => setIsDetailsLoading(false));
    }
  };

  return { isDetailsLoading, setIsDetailsLoading, loadUserDetails, profileData };
};
