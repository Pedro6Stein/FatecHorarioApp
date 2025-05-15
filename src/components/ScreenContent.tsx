import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />

      <Text className="text-2xl text-blue-500 font-semibold">
        BBBBBBBBBBBB
      </Text>

      <EditScreenInfo path={path} />

      {typeof children === 'string' 
        ? <Text className="mt-4 text-base">{children}</Text> 
        : children}
    </View>
  )
}
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
