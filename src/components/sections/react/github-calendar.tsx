import { GitHubCalendar as ReactGitHubCalendar } from "react-github-calendar";
import "react-activity-calendar/tooltips.css";

import { formatMonthDayWithOrdinal } from "@/utils/date";

interface GitHubCalendarProps extends React.ComponentProps<typeof ReactGitHubCalendar> {
  username: string;
}

export default function GitHubCalendar({ username, colorScheme = "light", tooltips, ...rest }: GitHubCalendarProps) {
  return (
    <ReactGitHubCalendar
      username={username}
      colorScheme={colorScheme}
      tooltips={{
        activity: {
          text: (activity) => {
            const readableDate = formatMonthDayWithOrdinal(activity.date);

            return `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${readableDate}`;
          },
        },
        ...tooltips,
      }}
      {...rest}
    />
  );
}
