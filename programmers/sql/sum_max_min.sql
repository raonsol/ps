# 최댓값 구하기
select datetime from ANIMAL_INS order by datetime desc limit 1;
select max(datetime) from ANIMAL_INS;

# 최솟값 구하기
select datetime from ANIMAL_INS order by datetime limit 1;
select min(datetime) from ANIMAL_INS;

# 동물 수 구하기
select count(animal_id) as count from ANIMAL_INS;

# 중복 제거하기
select count(distinct name) as count from ANIMAL_INS;