import { Button, Card, Group, Text } from '@mantine/core';
import type { CardProps } from '@mantine/core';

export interface StoryMantineCardProps extends CardProps {
  /** Card title */
  title?: string;
  /** Card content text */
  content?: string;
  /** Show button in card */
  showButton?: boolean;
  /** Button text */
  buttonText?: string;
}

/** Mantine Card component wrapper for Storybook */
export const MantineCard = ({
  title = 'Card Title',
  content = 'This is a sample card content. You can customize this text and other card properties.',
  showButton = true,
  buttonText = 'Button',
  children,
  ...props
}: StoryMantineCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder {...props}>
      <Card.Section>{children}</Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed" mb="md">
        {content}
      </Text>

      {showButton && (
        <Button color="blue" fullWidth mt="md" radius="md">
          {buttonText}
        </Button>
      )}
    </Card>
  );
};
