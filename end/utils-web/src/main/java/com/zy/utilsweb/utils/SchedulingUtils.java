package com.zy.utilsweb.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@EnableScheduling
public class SchedulingUtils {

    @Scheduled(cron = "${ScheduledOptions.urlToBd}")
    public void sendPOSTtoBD() {
        System.out.println(new Date().getTime());
    }

}
