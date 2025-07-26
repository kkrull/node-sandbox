default: all

sources := $(wildcard *.mmd)

.PHONY: debug-sources
debug-sources:
	$(info Sources:)
	$(info - sources: $(sources))

objects := $(patsubst %.mmd,%.mmd.svg,$(sources))

.PHONY: debug-objects
debug-objects:
	$(info Objects:)
	$(info - objects: $(objects))

.PHONY: all
all: $(objects)
	@:

.PHONY: clean
clean:
	$(RM) $(objects)

.PHONY: debug
debug: debug-sources debug-objects
	@:

%.mmd.svg: %.mmd
	mmdc -i "$<"

