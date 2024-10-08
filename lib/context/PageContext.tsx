import { AlertType } from "@/cineplay/lib/types/AlertType";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TPageContext = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  snackBarError: AlertType | undefined;
  setSnackBarError: Dispatch<SetStateAction<AlertType | undefined>>;
  currentSideMenu: string;
  setCurrentSideMenu: Dispatch<SetStateAction<string>>;
  DialogBox: JSX.Element | undefined;
  setDialogBox: Dispatch<SetStateAction<JSX.Element | undefined>>;
};

export const PageContext = createContext<TPageContext>(
  {} as unknown as TPageContext,
);

interface UserContextProviderProps {
  children: ReactNode;
}

export const PageContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [snackBarError, setSnackBarError] = useState<AlertType | undefined>();
  const [currentSideMenu, setCurrentSideMenu] = useState<string>("");
  const [DialogBox, setDialogBox] = useState<JSX.Element | undefined>(
    undefined,
  );

  return (
    <PageContext.Provider
      value={{
        searchText,
        setSearchText,
        snackBarError,
        setSnackBarError,
        currentSideMenu,
        setCurrentSideMenu,
        DialogBox,
        setDialogBox,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = (): TPageContext => useContext(PageContext);
