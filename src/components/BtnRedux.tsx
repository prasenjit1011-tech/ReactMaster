import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { increment } from "../redux/slices/clickCntSlice";

export default function BtnRedux(): JSX.Element {
    const dispatch      = useDispatch();
    const clickCount    = useSelector((state: RootState) => state.clickCnt.count);

    return (
        <div>
            <button className="clickBtn" onClick={() => dispatch(increment())} style={{cursor:'pointer', marginBottom:'10px'}}>
                Redux Button clicks: {clickCount}
            </button>
        </div>
    );
}