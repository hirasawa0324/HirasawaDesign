import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SearchField() {
  // const inputRef = useRef<HTMLInputElement>(null);
  // const searchParams = useSearchParams();
  // const defaultQuery = searchParams.get('q') || '';
  // const [composing, setComposition] = useState(false);
  // const startComposition = () => setComposition(true);
  // const endComposition = () => setComposition(false);
  // const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
  //   (e) => {
  //     if (e.code === 'Enter' && !composing) {
  //       location.href = `/search?q=${inputRef.current?.value}`;
  //     }
  //   },
  //   [composing],
  // );

  return (
    <div className="relative flex items-center border border-gray-200 rounded-full w-[600px]">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Image src="/assets/Search.svg" width={24} height={24} alt="Search Icon" />
      </div>
      <input
        type="search"
        name="q"
        // ref={inputRef}
        className="flex-1  h-10 pl-12 pr-3 rounded-full"
        placeholder="Search..."
        // onKeyDown={_onEnter}
        // onCompositionStart={startComposition}
        // onCompositionEnd={endComposition}
        // defaultValue={defaultQuery}
      />
    </div>
  );
}
