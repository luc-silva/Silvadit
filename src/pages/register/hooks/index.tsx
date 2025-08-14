import { ChangeEvent, useMemo, useState } from 'react';
import { registerUser } from '~/service/user';

export const useRegister = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [language, setLanguage] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [profilePicture, setProfilePicture] = useState<null | File>(null);
  const [profileBanner, setProfileBanner] = useState<null | File>(null);
  const [tags, setTags] = useState<string[]>([]);

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setPassword(target.value);
  };

  const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setConfirmPassword(target.value);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setEmail(target.value);
  };

  const handleConfirmEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setConfirmEmail(target.value);
  };

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setFirstName(target.value);
  };

  const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setLastName(target.value);
  };

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setUsername(target.value);
  };

  const handleLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setLanguage(target.value);
  };

  const handleCountry = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setCountry(target.value);
  };

  const handleState = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setState(target.value);
  };

  const handleProfilePicture = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setProfilePicture(files[0]);
    }
  };

  const handleProfileBanner = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      setProfileBanner(files[0]);
    }
  };

  const handleTags = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.value;
    const alreadyIncluded = tags.find((tag) => value === tag);

    if (!alreadyIncluded) setTags((prev) => [...prev, value]);
    else {
      const filtered = tags.filter((tag) => tag !== value);
      setTags(filtered);
    }
  };

  const enabledPages = useMemo(() => {
    const identity =
      !!password && !!confirmPassword && !!email && !!confirmEmail;

    const images =
      identity &&
      !!firstName &&
      !!lastName &&
      !!username &&
      !!language &&
      !!country &&
      !!state;

    return { identity, images };
  }, [password, confirmPassword, email, confirmEmail]);

  const [isRegisterUserLoading, setRegisterUserLoading] = useState(false);
  const loadRegisterUser = async () => {
    const data: ICreateUserData = {
      country,
      email,
      firstName,
      lastName,
      confirmPassword,
      password,
      state,
      username,
      tags,
    };

    setRegisterUserLoading(true);
    await registerUser(data).finally(() => {
      setRegisterUserLoading(false);
    });
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    language,
    setLanguage,
    country,
    setCountry,
    state,
    setState,
    profilePicture,
    setProfilePicture,
    profileBanner,
    setProfileBanner,
    tags,
    setTags,
    handlePassword,
    handleConfirmPassword,
    handleEmail,
    handleConfirmEmail,
    handleFirstName,
    handleLastName,
    handleUsername,
    handleCountry,
    handleState,
    handleLanguage,
    enabledPages,
    handleProfilePicture,
    handleProfileBanner,
    handleTags,
    loadRegisterUser,
    isRegisterUserLoading,
  };
};
