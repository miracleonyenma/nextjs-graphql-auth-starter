import ProfileForm from "@/components/Profile/Form";
import { User } from "@/types/gql/graphql";
import getMe from "@/utils/auth/me";

const AccountProfile = async () => {
  try {
    const user = (await getMe({})).data?.me;
    return (
      <div className="wrapper">
        <ProfileForm user={user as User} />
      </div>
    );
  } catch (error) {
    console.log("🔴 ~ AccountProfile ~ error", error);
    return (
      <div className="wrapper">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
};

export default AccountProfile;
