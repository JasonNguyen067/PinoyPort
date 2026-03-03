import PostConfirmation from "@/app/components/PostConfirmation";

// TODO: remove
import jason from '../../../public/jason.png';

export default function ConfirmationPage() {
  return (
    <PostConfirmation 
      establishmentName="Jollibee"
      dateEarned="02/02/2026"
      stampCount="1"
      foodImage={jason}
      stampImage="https://via.placeholder.com/120x120?text=Stamp"
    />
  );
}