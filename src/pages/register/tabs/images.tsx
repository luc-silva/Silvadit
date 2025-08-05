import { useRegisterContext } from '../context';

export const ImagesTab = () => {
  const {
    profileBanner,
    profilePicture,
    handleProfileBanner,
    handleProfilePicture,
  } = useRegisterContext();
  return (
    <div className="space-y-6">
      <div>
        <label className="text block font-medium mb-1 text-subtitle">
          Banner (opcional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileBanner}
          className="text-text"
        />
        {profileBanner ? (
          <img
            src={URL.createObjectURL(profileBanner)}
            alt="Banner Preview"
            className="mt-2 h-32 w-full object-cover rounded-lg border border-border"
          />
        ) : (
          <div className="mt-2 h-32 w-full rounded-lg  border border-border bg-bg" />
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-subtitle">
          Foto de perfil (opcional)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleProfilePicture}
          className="text-text"
        />
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="Preview"
            className="mt-2 w-20 h-20 object-cover rounded-full border border-border"
          />
        ) : (
          <div className="mt-2 w-20 h-20 rounded-full border border-border bg-bg" />
        )}
      </div>
    </div>
  );
};
