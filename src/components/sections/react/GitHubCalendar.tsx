import { GitHubCalendar as ReactGitHubCalendar } from "react-github-calendar";

interface GitHubCalendarProps
  extends React.ComponentProps<typeof ReactGitHubCalendar> {
  username: string;
}

export default function GitHubCalendar({
  username,
  colorScheme = "light",
  ...rest
}: GitHubCalendarProps) {
  return (
    <ReactGitHubCalendar
      username={username}
      colorScheme={colorScheme}
      {...rest}
    />
  );
}
