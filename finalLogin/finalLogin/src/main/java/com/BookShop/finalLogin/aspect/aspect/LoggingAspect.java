package com.BookShop.finalLogin.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Order(1)
@Component
public class LoggingAspect {
    Logger log = LoggerFactory.getLogger(LoggingAspect.class);


    @Pointcut(value = "execution(* com.BookShop.finalLogin.repository.*.*(..))")
    public void forRepositoryLog() {}

    @Pointcut(value = "execution(* com.BookShop.finalLogin.services.*.*(..))")
    public void forServiceLog () {}

    @Pointcut(value = "execution(* com.BookShop.finalLogin.controller.*.*(..))")
    public void forControllerLog () {}

    @Pointcut(value = "forRepositoryLog() || forServiceLog() || forControllerLog()")
    public void forAllApp() {}

//	@Before(value = "forAllApp()")
//	public void beforMethod(JoinPoint joinPoint) {
//
//		String methodName = joinPoint.getSignature().toShortString();
//
//		log.info("====>  Method Name is >> {}" , methodName );
//
//		Object [] args = joinPoint.getArgs();
//
//		for (Object arg : args) {
//
//			log.info("===> argument >> {}" , arg);
//		}
//
//	}
}
