import { ref, Ref } from 'vue';

export type BaseOptions<R, P extends unknown[]> = {
  defaultParams?: P;
  manual?: boolean;
  ready?: Ref<boolean>;
  throwOnError?: boolean;
  initialData?: R;
  refreshDeps?: Ref<any>[];
  loadingDelay?: number;
  pollingInterval?: number;
  pollingWhenHidden?: boolean;
  debounceInterval?: number;
  throttleInterval?: number;
  refreshOnWindowFocus?: boolean;
  focusTimespan?: number;
  // TODO: 正确处理 formatResult 返回值类型和普通请求返回值类型
  formatResult?: (data: any) => R;
  onSuccess?: (data: R, params: P) => void;
  onError?: (error: Error, params: P) => void;
};

export type Config<R, P extends unknown[]> = Omit<
  BaseOptions<R, P>,
  'defaultParams' | 'manual' | 'ready' | 'refreshDeps'
> & {
  pollingHiddenFlag: Ref<boolean>;
};

const DefaultOptions: BaseOptions<any, any> = {
  defaultParams: [],
  manual: false,
  ready: ref(true),
  throwOnError: false,
  refreshDeps: [],
  loadingDelay: 0,
  pollingWhenHidden: false,
  refreshOnWindowFocus: false,
  focusTimespan: 5000,
};
export default DefaultOptions as Required<BaseOptions<any, any>>;
