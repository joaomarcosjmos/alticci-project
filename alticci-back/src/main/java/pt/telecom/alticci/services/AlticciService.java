package pt.telecom.alticci.services;

import io.quarkus.cache.CacheResult;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AlticciService {

    @CacheResult(cacheName = "alticci-cache-number")
    public Long executeAlticci(Long number) {

        if (number == 0) {
            return 0L;
        }

        if (number == 1 || number == 2) {
            return 1L;
        }

        return executeAlticci(number - 3) + executeAlticci(number - 2);
    }
}
