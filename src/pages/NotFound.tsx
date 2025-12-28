import Container from "../components/Container";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <Container className="py-20">
      <div className="glass rounded-xl2 p-10 text-center">
        <div className="font-display text-5xl font-extrabold gradient-text">404</div>
        <div className="mt-3 text-[var(--muted)]">Page not found.</div>
        <div className="mt-6 flex justify-center">
          <Link to="/"><AnimatedButton>Back to Home</AnimatedButton></Link>
        </div>
      </div>
    </Container>
  );
}
