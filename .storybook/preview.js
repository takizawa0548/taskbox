
import '../src/index.css';

// Registers the msw addon
 import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
 initialize();

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
/** @type { import('@storybook/react').Preview } */
const preview = {
  controls: { expanded: true },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  docs: { 
    description: {
      component: 'Example of using tags to filter stories in Storybook.',
    },
  },
  tags: {
    filters: {
      important: '重要なストーリー',
      button: 'ボタンに関連するストーリー',
    },
  }
, loaders: [mswLoader],
}
