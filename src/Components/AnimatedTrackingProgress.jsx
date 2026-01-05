
import dayjs from "dayjs"


export function AnimatedTrackingProgress({ startTime, endTime }) {

    const start = dayjs(startTime)
    const end = dayjs(endTime)
    const now = dayjs()
    const totalTime = end.diff(start);
    const timePassed = now.diff(start)
    console.log("start:", start.format());
    console.log("end:", end.format());
    console.log("now:", now.format());      //old dates may be the probzzzzz
    console.log("totalTime:", totalTime);
    console.log("timePassed:", timePassed);
    let progressRatio = timePassed / totalTime
    if (progressRatio < 0) progressRatio = 0
    if (progressRatio > 1) progressRatio = 1
    const progressPercent = progressRatio * 100

    let status = "preparing"
    if (progressPercent >= 100) {
        status = "Delivered";
    }
    else if (progressPercent >= 33) {
        status = "shipped";
    }
    const preparingClass = status === "preparing" ? "text-success" : "text-muted"
    const shippedClass = status === "shipped" ? "text-success" : "text-muted";
    const deliveredClass = status === "Delivered" ? "text-success" : "text-muted";




    return (
        <div className="mt-5">

            {/* STATUS LABELS */}
            <div className="d-flex justify-content-between fw-semibold mb-2">
                <span className={preparingClass}>Preparing</span>
                <span className={shippedClass}>Shipped</span>
                <span className={deliveredClass}>Delivered</span>
            </div>

            {/* PROGRESS BAR */}
            <div className="progress" style={{ height: "14px", borderRadius: "20px" }}>
                <div
                    className="progress-bar bg-success"
                    style={{ width: `${progressPercent}%`, borderRadius: "20px", transition: "width 0.07s linear" }}
                ></div>
            </div>

        </div>
    )
}
