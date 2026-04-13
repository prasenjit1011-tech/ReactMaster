import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function BtnRedux(): JSX.Element {
    const clickCount = useSelector((state: RootState) => state.clickCnt.count);

    return (
        <div>
            <p className="clickBtn">
                Button clicks: {clickCount}
            </p>
        </div>
    );
}