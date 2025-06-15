'use client';

import { AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { FC } from 'react';
import { Sidebar } from './Sidebar';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  const handleNavigate = (path: string) => {
    console.log('ナビゲート:', path);
    // TODO: 実際のルーティング処理を実装
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="lg" fw={600}>
            マークダウンビューアー
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar onNavigate={handleNavigate} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
