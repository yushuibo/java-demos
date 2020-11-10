/**
 * @Date        : 2020-11-10 16:32:47
 * @Author      : shy
 * @Email       : yushuibo@ebupt.com / hengchen2005@gmail.com
 * @Version     : v1.0
 * @Description : -
 */
package me.shy.demo.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

// 定义一个 feign 接口，通过注解 @FeignClient(value="service-hi") 指定需要调用的服务
@FeignClient(value = "service-hi")
public interface SchedualServiceHi {
    @GetMapping("/hi")
    String sayHiFromClientOne(@RequestParam(value="name") String name);
}
