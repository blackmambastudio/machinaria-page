#!/usr/bin/env python3

# file: wait_for_edge-detected-both-fix.py
#
# wait_for_edge_detected solution for falling & rising edges (both)
# a falling edge is detected at approx. 1.16V, a rising edge at approx. 1.25V
#
# you can optionally use GPIO.remove_event_detect(Input_Sig)
#
__author__ = 'paulv'

import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BOARD)

Input_Sig = 16 # any plain GPIO pin
GPIO.setup(Input_Sig, GPIO.IN)

# set up the edge detection
GPIO.add_event_detect(Input_Sig, GPIO.BOTH)


def main():

    try:
        while True:
            pass # your code

            if GPIO.event_detected(Input_Sig):
                # if we're here, an edge was detected
                sleep(0.005) # debounce for 5mSec
                # only show valid edges
                if GPIO.input(Input_Sig) == 1:
                    print("RISING")
                else:
                    print("FALLING")


    except KeyboardInterrupt:
        pass
    finally:
        print("\nRelease the used pin(s)")
        GPIO.cleanup([Input_Sig])


if __name__ == '__main__':
    main()
