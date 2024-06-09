/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/YRjxYpVC70g
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 ">
      <div className="mx-auto container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Welcome to our visual novel experience!
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              In this story, you&apos;ll be able to interact with the narrator
              and explore the world together.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video bg-gray-200" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between ">
            <div className="relative w-2/3">
              <Textarea
                className="min-h-[48px]  rounded-2xl resize-none p-4 border  border-gray-200  shadow-sm pr-16 "
                id="chat"
                name="chat"
                placeholder="Ask the narrator..."
                rows={1}
              />
              <Button
                className="absolute top-3 right-3 w-8 h-8"
                size="icon"
                type="submit"
              >
                <ArrowUpIcon className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="text-red-500" size="icon" variant="ghost">
                <PlayIcon className="h-6 w-6" />
                <span className="sr-only">Play</span>
              </Button>
              <Button className="text-red-500" size="icon" variant="ghost">
                <PauseIcon className="h-6 w-6" />
                <span className="sr-only">Pause</span>
              </Button>
              <Button className="text-red-500" size="icon" variant="ghost">
                <RewindIcon className="h-6 w-6" />
                <span className="sr-only">Rewind</span>
              </Button>
              <Button className="text-red-500" size="icon" variant="ghost">
                <FastForwardIcon className="h-6 w-6" />
                <span className="sr-only">Fast forward</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function FastForwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function RewindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 19 2 12 11 5 11 19" />
      <polygon points="22 19 13 12 22 5 22 19" />
    </svg>
  );
}
