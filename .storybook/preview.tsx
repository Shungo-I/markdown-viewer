import type { Preview } from '@storybook/nextjs-vite';
import { MantineProvider } from '@mantine/core';
import { theme } from '../src/app/theme';

// Import Mantine styles
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => {
      return (
        <MantineProvider theme={theme}>
          <Story />
        </MantineProvider>
      );
    },
  ],
};

export default preview;
