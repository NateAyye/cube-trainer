"use client";
import { Copy, Edit, Lock, RotateCw } from "lucide-react";
import React, { useCallback, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { useTimer } from "~/hooks/useTimer";
import { cn } from "~/lib/utils";
import {
  generateScramble,
  setScramble,
} from "~/store/features/scramble/scrambleSlice";
import { useAppDispatch, useAppSelector } from "~/store/hooks";

const DEFAULT_TIME = 0;

type TimerStatus = "RUNNING" | "READY" | "HOLDING" | "STOPPED";

interface TimerProps {
  time?: number;
}

const Timer: React.FC<TimerProps> = ({ time = DEFAULT_TIME }) => {
  const scrambleState = useAppSelector((state) => state.scramble.scramble);
  const dispatch = useAppDispatch();

  const { hours, minutes, seconds, miliseconds, play, pause, reset } =
    useTimer(time);

  const scrambleRef = React.useRef<HTMLDivElement>(null);

  const timerId = React.useRef<NodeJS.Timeout>();
  const [timerStatus, setTimerStatus] = React.useState<TimerStatus>("STOPPED");
  const [scramleIsLocked, setScrambleIsLocked] = React.useState(false);
  const [editScramble, setEditScramble] = React.useState(false);

  const handleStart = useCallback(() => {
    if (timerId.current) clearTimeout(timerId.current);
    setTimerStatus(() => "HOLDING");
    reset();
    timerId.current = setTimeout(() => setTimerStatus(() => "READY"), 500);
  }, [reset]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (timerStatus === "HOLDING") return;
      if (timerStatus === "RUNNING") {
        e.preventDefault();
        pause();
        setTimerStatus(() => "STOPPED");
        return;
      }

      // Check if the space key is pressed
      if (e.key === " " && timerStatus === "STOPPED") {
        if (timerId.current) clearTimeout(timerId.current);
        handleStart();
        return;
      }
      console.log("key down", e.key, timerStatus);
    },
    [handleStart, timerStatus, pause],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (timerId.current) clearTimeout(timerId.current);
      if (e.key === " ") {
        if (timerStatus === "READY") {
          play();
          setTimerStatus(() => "RUNNING");
        }
        if (timerStatus === "HOLDING") {
          setTimerStatus(() => "STOPPED");
        }
      }
    },
    [play, timerStatus],
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (!e.target) return;
      if ((e.target as HTMLElement).id !== "cube-mat") return;

      if (timerId.current) clearTimeout(timerId.current);

      if (timerStatus === "RUNNING") {
        pause();
        setTimerStatus(() => "STOPPED");
        return;
      } else if (timerStatus === "STOPPED") {
        setTimerStatus(() => "HOLDING");
        reset();
        handleStart();
        return;
      }
    },
    [reset, pause, timerStatus, handleStart],
  );

  const handleTouchEnd = useCallback(() => {
    if (timerId.current) clearTimeout(timerId.current);
    if (timerStatus === "READY") {
      play();
      setTimerStatus(() => "RUNNING");
      return;
    }
    if (timerStatus === "HOLDING") {
      setTimerStatus(() => "STOPPED");
      return;
    }
  }, [play, timerStatus]);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchend", handleTouchEnd, false);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className="text-primary-foreground">
      <div
        ref={scrambleRef}
        contentEditable={editScramble}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            dispatch(setScramble(scrambleState));
            setEditScramble(false);
          }
        }}
        className={cn(
          " rounded px-5 text-center text-muted2",
          editScramble ? "border-2 border-yellow-500" : "",
        )}
      >
        {scrambleState}
      </div>
      <div
        id="mat-time"
        className={cn(
          "text-center font-sans",
          timerStatus === "HOLDING" ? "text-red-500" : "",
          timerStatus === "READY" ? "text-green-500" : "",
        )}
      >
        {hours > 0 ? <span className="text-8xl">{hours}:</span> : <></>}
        {minutes > 0 ? <span className="text-8xl">{minutes}:</span> : <></>}
        <span className="text-8xl">{seconds}</span>
        <span className="text-7xl">.</span>
        <span className="text-6xl">
          {miliseconds.toString().padStart(2, "0")}
        </span>
      </div>
      <div
        id="timer-toolbar"
        className={cn("flex items-center justify-center gap-4")}
      >
        <Button
          className={cn(
            "toolbar-button  h-7 w-7 p-0",
            editScramble ? "bg-accent text-accent-foreground" : "",
          )}
          variant={"ghost"}
          onClick={() => {
            if (scrambleRef.current) {
              setEditScramble((prev) => !prev);
              dispatch(setScramble(scrambleRef.current.innerText));
              setTimeout(() => {
                if (scrambleRef.current) scrambleRef.current.focus();
              }, 0);
            }
          }}
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          className={cn(
            "toolbar-button h-7 w-7 p-0 ",
            scramleIsLocked ? "bg-accent text-accent-foreground" : "",
          )}
          variant={"ghost"}
          onClick={() => {
            setScrambleIsLocked((prev) => !prev);
          }}
        >
          <Lock className="h-4 w-4" />
        </Button>
        <Button
          className="toolbar-button h-7 w-7 p-0"
          variant={"ghost"}
          onClick={() => {
            // Copy to clipboard
            navigator.clipboard
              .writeText(scrambleState)
              .then(() => {
                console.log("copied");
              })
              .catch(() => {
                alert("something went wrong");
              });
          }}
        >
          <Copy className="h-4 w-4" />
        </Button>
        <Button
          className="toolbar-button h-7 w-7 p-0"
          variant={"ghost"}
          onClick={() => {
            // TODO: Generate new scramble
            // const newScramble = getNewScramble("3x3");
            dispatch(generateScramble("3x3"));
            // setScrambleText(newScramble);
          }}
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
